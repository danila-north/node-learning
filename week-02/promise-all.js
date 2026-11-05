function wait(ms, value) {
    return new Promise ((resolve) => {
        setTimeout(() => resolve(value), ms);
    });
}

async function main() {
    console.time("последовательно")
    await wait(1000, "A");
    await wait(1000, "B");
    await wait(1000, "C");
    console.timeEnd("последовательно")
    console.time("parralel")
    await Promise.all([wait(1000, "A"), wait(1000, "B"), wait(1000, "C"),])
    console.timeEnd("parralel")
}

main();