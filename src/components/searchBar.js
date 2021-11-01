import React, {useState} from "react";

const Searchbar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    const onSubmit =(event) => {
        event.preventDefault();

        onFormSubmit(term);
    };
    
    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input  type="text"
                            value={term}
                            onChange={onInputChange}>
                    </input>
                </div>
            </form>
        </div>
    )
}

export default Searchbar;