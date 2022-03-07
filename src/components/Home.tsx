import React, { useEffect, useState } from "react";
import GeneralStatusBar from './GeneralStatusBar'
import style from './Styles'
import getPokemon from "../functions/getPokemon";
import PokemonLogo from '../../assets/svgs/pokemonlogo.svg'
import { View, TextInput, Image, Text } from "react-native";
import { captalizeText } from '../functions/geral'

interface PokeInformations{
  name: string,
  sprites : {
    front_default : string
  }
}
interface PokemonMount{
  name : string,
  img: string
}

const Home = () => {
  const [text, setText]  = useState("")
  const [pokemon, setPokemon] = useState<PokemonMount>()
  
  const handleText = (text : string) => {
    setText(text)
  }

  useEffect(() => {
    if(text){
      getPokemon(text).then((data : PokeInformations) => {
        const pokemon : PokemonMount = {
          name : data.name,
          img : data.sprites.front_default
        }
        setPokemon(pokemon)
      })
    }
  })

  return (
    <>
    <GeneralStatusBar />
    <View style={style.main}>
      <View style={style.topContent}>
        <PokemonLogo width={200}></PokemonLogo>
        <TextInput
          style={style.inputPokemon}
          placeholder="Search pokemons with name or id!"
          onChangeText={evt => handleText(evt)}
        />
      </View>

      <View style={style.divisor}>
        <View style={style.outBall}>
          <View style={style.innerBall}>
          </View>
        </View>
      </View>

      <View style={style.bottom}>
        <View style={style.pokemonCard}>
          <View>
          {pokemon?.img && (
            <Image
              source={{ uri: `${pokemon?.img}` }}
              style={{ width: 300, height: 300 }}
            />
          )}
          </View>
          {pokemon?.name && (
            <Text>Name: {captalizeText(pokemon.name)}</Text>
          )}
        </View>
      </View>
    </View>
      
    </>
  );
};

export default Home;