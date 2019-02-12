export const withdrawFunds = amount => (
    {
        type: "WITHDRAW_FUNDS",
        amount: amount,
    }
)

export const depositFunds = amount => (
    {
        type: "DEPOSIT_FUNDS",
        amount: amount,
    }
)

export const insufficientFunds = amount => (
    {
        type: "INSUFFICIENT_FUNDS",
        amount: amount,
    }
)
