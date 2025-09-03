export const Card = ({name , age , city , active , id }) => {

    return (
        <>
            <div className="CardWrapper" style={{border: "1px solid black", display: "flex", flexDirection: "column", flexWrap: "wrap" , padding: "10px 80px", borderRadius: "10px", margin: "10px"}}>
                <span>Num card:{id}</span>
                <h2>{name}</h2>
                <span>AGE : {age}</span>
                <p>CITY: {city}</p>
                <p>статус:{active ? 'TRUE👌' : 'FALSE😒'}</p>
            </div>

        </>

    )
}

