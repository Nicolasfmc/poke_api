import axios from '..'

export const getPokemon = async (id: number): Promise<any> => {
  const response = axios.get<any>(`/pokemon/${id < 1 ? 1 : id}`)

  return Promise.resolve(response)
}
