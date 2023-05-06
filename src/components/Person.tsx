import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  Brazil = "Brazil",
  Canada = "Canada",
  Spain = "Spain",
}

/* const getAge = (name: string): number => {
  return 33
}
 o tipo fora do parênteses especifica o tipo do retorno da função
*/

export const Person = (props: Props) => {
  //  const [state, setState] = useState<string>("")

  const [number, setNumber] = useState<string>("0")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value)
  }

  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
      {props.friends.map((friend: string) => (
        <h1>{friend}</h1>
      ))}
      <h1>Country: {props.country}</h1>

      <h1>{number}</h1>
      <input type="text" placeholder="digite o novo valor do numero" onChange={handleChange} />
    </div>
  )

}