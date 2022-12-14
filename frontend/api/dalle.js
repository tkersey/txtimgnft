export class Dalle {
    bearerToken
    url

    constructor(bearerToken) {
        this.bearerToken = bearerToken;
        this.url = "https://labs.openai.com/api/labs/tasks";
    }

    async generate(prompt) {
        const body = {
            task_type: "text2im",
            prompt: {caption: prompt, batch_size: 4},
        };

        return new Promise(async (resolve, reject) => {
            const response = await fetch(this.url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${this.bearerToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                console.error(response);
                return reject(
                    "Unauthorised. Invalid unique session ID."
                );
            }

            const data = await response.json();

            const taskId = data.id;

            const refreshIntervalId = setInterval(async () => {
                const response = await fetch(`${this.url}/${taskId}`, {
                    headers: {
                        Authorization: `Bearer ${this.bearerToken}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    console.error(response);
                    return reject(
                        "Dall-e 2 couldn't generate images based upon your caption."
                    );
                }

                const data = await response.json();

                if (data.status === "rejected") {
                    clearInterval(refreshIntervalId);
                    resolve(data.status_information);
                } else if (data.status === "succeeded") {
                    const generations = data.generations;
                    clearInterval(refreshIntervalId);
                    resolve(generations);
                }
            }, 3000);
        });
    }
}