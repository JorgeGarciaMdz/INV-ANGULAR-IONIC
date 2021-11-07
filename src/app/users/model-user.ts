export class User {
    constructor(
        public id ?: number,
        public name ?: string,
        public lastname ?: string,
        public dni ?: number,
        public birthday ?: Date,
        public genre ?: string,
        public email ?: string,
        public password ?: string
    ) { }
}