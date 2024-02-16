import React from 'react';
import ReactPlayer from 'react-player';
import TemplateEmty from './TemplateEmty';

function TemplateYoutube({ data, provided, template, idx, setFocus,__delete }) {
  return (
    <>
      {idx === 0 ? <TemplateEmty idx={idx} /> : undefined}
      <div
        className="template-youtube"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        onClick={() => {
          console.log(idx);
          setFocus(idx);
        }}
      >
                <button
          className="remove-btn"
          onClick={() => {
            __delete(idx);
          }}
        >
          <img src="/assets/editor/remove.svg" alt="삭제" />
        </button>
        <div className="dnd-icon">
          <img
            src="/assets/projects/dnd-icon.svg"
            alt="원하는 위치로 이동해보세요!"
          />
        </div>

        <ReactPlayer
          className="player"
          controls
          url={data}
          width={'100%'}
          height={'100%'}
        />
      </div>
      {!template[idx + 1] || template[idx + 1].type !== 'TITLE' ? (
        <TemplateEmty idx={idx + 1} />
      ) : undefined}
    </>
  );
}

export default TemplateYoutube;
