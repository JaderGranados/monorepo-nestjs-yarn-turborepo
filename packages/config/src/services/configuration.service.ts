export class Configuration {
    private JWT_SECRET: string = process.env.JWT_SECRET;

    public getJwtSecret(): string {
        return this.JWT_SECRET;
    }
}