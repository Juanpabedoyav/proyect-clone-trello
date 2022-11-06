import Image from "next/image";

function Card({ text, id, setDragged }) {
  const handleDragStart = (event) => {
    setDragged({
      data: {
        text,
        id,
      },
      list: event.target.closest('[data-list]').dataset.list
    });
  };
  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="bg-slate-100 hover:bg-slate-300 text-slate-900 rounded-md p-3 flex flex-col gap-6"
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <p className="font-medium">{text}</p>
        </div>
        <Image src="/static/icons/edit.png" width={20} height={20} alt="edit" />
      </div>
      <div className="flex justify-between">
        <img alt="avatar" />
        <Image
          src="/static/icons/message.png"
          width={32}
          height={32}
          alt="message"
        />
      </div>
    </div>
  );
}

export default Card;
