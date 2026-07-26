declare module "bun:test" {
  export function describe(name: string, run: () => void): void;
  export function test(name: string, run: () => void | Promise<void>): void;

  type Matcher = {
    toBe(expected: unknown): void;
    toEqual(expected: unknown): void;
    toBeGreaterThan(expected: number): void;
  };

  export function expect(actual: unknown): Matcher;
}
