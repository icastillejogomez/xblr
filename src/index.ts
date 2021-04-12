const world = 'world'

export function hello(word?: string): string {
  return `Hello ${word || world}! `
}

console.log(hello())
