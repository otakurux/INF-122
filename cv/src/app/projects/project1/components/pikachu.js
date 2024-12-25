"use client"
import { useEffect, useState } from "react";
import styles from "../styles/pikachu.module.css";
import Image from "next/image";

const Pikachu = () => {
    const [pokemon, setPokemon] = useState("/vercel.svg")
    const [name, setName] = useState("name");

    const [Type, setType] = useState("type");
    const [Height, setHeight] = useState("type");
    const [Weight, setWeight] = useState("type");
    const [Abilities, setAbilities] = useState("type");

    const [HP, setHp] = useState("type");
    const [Attack, setAttack] = useState("type");
    const [Defense, setDefense] = useState("type");
    const [Speed, setSpeed] = useState("type");


    const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data.sprites.back_default);
                setName(data.name);

                setType(data.types[0].type.name);
                setHeight(data.height);
                setWeight(data.weight);
                setAbilities(data.abilities[0].ability.name);

                setHp(data.stats[0].base_stat);
                setAttack(data.stats[1].base_stat);
                setDefense(data.stats[2].base_stat);
                setSpeed(data.stats[5].base_stat)
            });
    }, []);

    const about = {
        Type: Type,
        Height: Height/10,
        Weight: Weight/10,
        Abilities: Abilities
    }

    const stats = {
        HP: HP,
        Attack: Attack,
        Defense: Defense,
        Speed:Speed
    }
    
    return (
        <div className={styles.containerMain}>
            <div className={styles.container}>
                <div className={styles.containerPrimary}>
                    <div>
                        <h2 className={styles.subTitle}>My Pokemon</h2>
                        <h1 className={styles.title}>{name}</h1>
                        <Image
                            src={pokemon}
                            width={325}
                            height={325}
                            alt="pokemon"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.infoContainer}>

                    <h1 className={styles.textTitle}>About</h1>
                    <div className={styles.container}>
                        <div className={styles.division}>
                            <div className={styles.containerText}>
                                <p className={styles.text}>Type</p>
                                <p className={styles.text}>Height</p>
                                <p className={styles.text}>Weight</p>
                                <p className={styles.text}>Abilities</p>
                            </div>
                            <div className={styles.containerText}>
                                <h1 className={styles.text}>{Type}</h1>
                                <h1 className={styles.text}>{Height / 10}m</h1>
                                <h1 className={styles.text}>{Weight / 10}kg</h1>
                                <h1 className={styles.text}>{Abilities}</h1>
                            </div>
                        </div>
                    </div>

                    <h1 className={styles.textTitle}>Stats</h1>
                    <div className={styles.container}>
                        <div className={styles.division}>
                            <div className={styles.containerText}>
                                <p className={styles.text}>HP</p>
                                <p className={styles.text}>Attack</p>
                                <p className={styles.text}>Defense</p>
                                <p className={styles.text}>Speed</p>
                            </div>
                            <div className={styles.containerText}>
                                <h1 className={styles.text}>{HP}</h1>
                                <h1 className={styles.text}>{Attack}</h1>
                                <h1 className={styles.text}>{Defense}</h1>
                                <h1 className={styles.text}>{Speed}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pikachu;