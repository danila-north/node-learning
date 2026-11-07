class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
    }
}

function findProduct(id) {
    if(id <= 0) {
        throw new ValidationError("id должен быть больше нуля")
    }
    if(id > 100) {
        throw new NotFoundError("Товар не найден")
    } else {
        return { id, title: "Товар " + id}
    }
}

try {
    console.log(findProduct(500))
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("400", error.message);
    } else if (error instanceof NotFoundError) {
        console.log("404", error.message);
    }
}