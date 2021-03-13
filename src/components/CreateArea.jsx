import React, { useState } from "react";
import { Zoom } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [state, setState] = useState(false);


  return (
    <div className="formz">
      {state ? (
        <input
          name="title"
          placeholder="Title"
          value={props.title}
          onChange={props.change}
          autoComplete='off'
        />
      ) : null}

      <textarea
        name="content"
        placeholder="Take a note..."
        rows={state ? "3" : "1"}
        value={props.content}
        onChange={props.change}
        onClick={() => setState(true)}
      />
      <Zoom in={state}>
        <Fab onClick={props.add} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default CreateArea;
