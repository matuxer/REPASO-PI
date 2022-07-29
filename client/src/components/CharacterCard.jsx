

export const CharacterCard = ({name, image}) => {
  return (
    <div className="carta">
      <h3>{name}</h3>
      <img src={image} alt="imagen" />
    </div>
  );
}