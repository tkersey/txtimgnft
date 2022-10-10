export class NEARNft {
    constructor({contractId, walletToUse}) {
        this.contractId = contractId;
        this.wallet = walletToUse;
    }

    // MINT
    async nftMint(token_id, metadata, receiver_id, perpetual_royalties) {
        return await this.wallet.callMethod({
            contractId: this.contractId, method: 'nft_mint', args: {
                token_id: token_id,
                metadata: metadata,
                receiver_id: receiver_id,
                perpetual_royalties: perpetual_royalties
            },
            deposit: "1000000000000000000000000"
        });
    }

    // CORE
    async nftToken(token_id) {
        return await this.wallet.viewMethod({
            contractId: this.contractId, method: 'nft_token', args: {token_id: token_id}
        });
    }

    async nftTransfer(receiver_id, token_id, approval_id, memo) {
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: 'nft_transfer',
            args: {receiver_id: receiver_id, token_id: token_id, approval_id: approval_id, memo: memo}
        });
    }

    async nftTransferCall(receiver_id, token_id, approval_id, memo, msg) {
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: 'nft_transfer_call',
            args: {receiver_id: receiver_id, token_id: token_id, approval_id: approval_id, memo: memo, msg: msg}
        });
    }

    async nftResolveTransfer(authorized_id, owner_id, receiver_id, token_id, approved_account_ids, memo) {
        return await this.wallet.callMethod({
            contractId: this.contractId, method: 'nft_resolve_transfer', args: {
                authorized_id: authorized_id,
                owner_id: owner_id,
                receiver_id: receiver_id,
                token_id: token_id,
                approved_account_ids: approved_account_ids,
                memo: memo
            }
        });
    }

    // APPROVALS
    async nftIsApproved(token_id, approved_account_id, approval_id) {
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: 'nft_is_approved',
            args: {token_id: token_id, approved_account_id: approved_account_id, approval_id: approval_id}
        });
    }

    async nftApprove(token_id, account_id, msg) {
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: 'nft_approve',
            args: {token_id: token_id, account_id: account_id, msg: msg}
        });
    }

    // ROYALTY
    async nftPayout(token_id, balance, max_len_payout) {
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: 'nft_payout',
            args: {token_id: token_id, balance: balance, max_len_payout: max_len_payout}
        });
    }

    async nftTransferPayout(receiver_id, token_id, approval_id, memo, balance, max_len_payout) {
        return await this.wallet.callMethod({
            contractId: this.contractId, method: 'nft_transfer_payout', args: {
                receiver_id: receiver_id,
                token_id: token_id,
                approval_id: approval_id,
                memo: memo,
                balance: balance,
                max_len_payout: max_len_payout
            }
        });
    }

    async nftRevoke(token_id, account_id) {
        return await this.wallet.callMethod({
            contractId: this.contractId, method: 'nft_revoke', args: {token_id: token_id, account_id: account_id}
        });
    }

    async nftRevokeAll(token_id) {
        return await this.wallet.callMethod({
            contractId: this.contractId, method: 'nft_revoke_all', args: {token_id: token_id}
        });
    }

    // ENUMERATION
    async nftTotalSupply() {
        return await this.wallet.viewMethod({
            contractId: this.contractId, method: 'nft_total_supply'
        });
    }

    async nftTokens(from_index, limit) {
        return await this.wallet.viewMethod({
            contractId: this.contractId, method: 'nft_tokens', args: {from_index: from_index, limit: limit}
        });
    }

    async nftTokensForOwner(account_id, from_index, limit) {
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: 'nft_tokens_for_owner',
            args: {account_id: account_id, from_index: from_index, limit: limit}
        });
    }

    async nftSupplyForOwner(account_id) {
        return await this.wallet.viewMethod({
            contractId: this.contractId, method: 'nft_supply_for_owner', args: {account_id: account_id}
        });
    }

    // METADATA
    async nftMetadata() {
        return await this.wallet.viewMethod({contractId: this.contractId, method: 'nft_metadata'});
    }
}