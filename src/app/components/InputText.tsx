import { TextField } from "@mui/material"

export default function InputText(props) {
    return (
        <div className="w-full mt-7 mb-7">
              <TextField fullWidth id="filled-basic" label={props.labelValue} variant="filled" value={props.inputVariable}/>
        </div>
    )
}