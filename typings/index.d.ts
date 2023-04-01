export interface Director {
  name: string,
  born: Date,
  img?: string
}

export interface Actor {
  name: string,
  born: Date,
  img?: string
}

export interface Movie {
  name: string
  director: Director
  actors: Actor[]
  year: number
}