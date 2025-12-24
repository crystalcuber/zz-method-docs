export type Language = "en"

export type Translation<T> = { [key in Language]: T }
