export default {
    getStyle: (part) => {
        if(part.added){
          style.color = "green";
          style["font-weight"] = "bold";
        } else if(part.removed){
          style.color = "red";
          style["font-weight"] = "bold";
        } else {
          style.color = "grey";
        }
    },

    getValue: (part) => {
        if(part.added || part.removed){
            return part.value;
        } else {
            if(part.value.length <= 200) {
                return part.value;
            } else if(index == 0) {
                return `...${part.value.trim().slice(-100)}`;
            } else if(index < this.props.diff.length-1) {
                return `${part.value.trim().slice(0, 100)}... ...${part.value.trim().slice(-100)}`;
            } else {
                return `${part.value.trim().slice(0, 100)}...`;
            }
        }
    }
}