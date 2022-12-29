export class QueryClient {
  private count: number;

  constructor() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  getCount() {
    return this.count;
  }
}
