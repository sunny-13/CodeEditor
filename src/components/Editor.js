import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/theme/dracula.css';
import { Controlled as ControlledEditor} from 'react-codemirror2';

function Editor({language,value,setValue}) {
    function changeValue(editor, data, value){
        setValue(value);
    }
  return (
    <div className="editor">

        <ControlledEditor 
            onBeforeChange={changeValue}
            value={value}
            options={
                {lineWrapping: true,
                lint: true,
                mode: language,
                lineNumbers: true,
                theme: 'dracula' }
            }
        />
    </div>
  )
}

export default Editor;