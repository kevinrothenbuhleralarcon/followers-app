export class AppError{
    constructor(public originalError?: any) {}
}

export class BadInput extends AppError {}
export class NotFound extends AppError {}