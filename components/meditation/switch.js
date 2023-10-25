export default function Switch({ selectedOption, emitClickEvent }) {
  const handleRecuperarClick = (event) => {
    emitClickEvent(event, 'recuperar');
  };

  const handleEvoluirClick = (event) => {
    emitClickEvent(event, 'evoluir');
  };

  return (
    <div className="bg-verdePrincipal px-3 flex p-2 rounded-full gap-4 text-white">
      <div
        className={
          selectedOption == 'recuperar'
            ? 'w-32 text-center bg-[#AAC5A5] transition-all active:scale-90 cursor-pointer p-1 rounded-full'
            : 'w-32 text-center hover:bg-[#AAC5A5] transition-all active:scale-90 cursor-pointer p-1 rounded-full'
        }
        onClick={handleRecuperarClick}
      >
        <p>Recuperar</p>
      </div>
      <div
        className={
          selectedOption == 'evoluir'
            ? 'w-32 text-center bg-[#AAC5A5] transition-all active:scale-90 cursor-pointer p-1 rounded-full'
            : 'w-32 text-center hover:bg-[#AAC5A5] transition-all active:scale-90 cursor-pointer p-1 rounded-full'
        }
        onClick={handleEvoluirClick}
      >
        <p>Evoluir</p>
      </div>
    </div>
  );
}
