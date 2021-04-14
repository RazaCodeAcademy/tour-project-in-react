import React from 'react'

const List = ({people}) => {
    return (
        <div>
            {
                people.map((person)=>{
                    const {id, name, age, image} = person;
                    return <article key={id} >
                        <img src={image} alt={name} className="img person" />
                        <div className="name-age">
                            <h3>{name}</h3>
                            <p>{age} years</p>
                        </div>
                    </article>
                })
            }
        </div>
    )
}

export default List;