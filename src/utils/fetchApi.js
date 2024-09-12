async function postCreatePrompt(prompt_hash, prompt, secret_hash, secret) {
    const url =
        "https://ib9fm6yjjg.execute-api.ap-northeast-2.amazonaws.com/ctp/ctp/create-prompt";

    const data = { prompt_hash, prompt, secret_hash, secret };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log(result.message);
    } catch (error) {
        console.error("Error:", error);
    }
}

export {
    postCreatePrompt,
}