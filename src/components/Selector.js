import React, {useEffect, useState} from 'react';
import './css/Selector.css'
import './css/More.css'
import Category from './Category'
const Selector = ({type, onSubmit}) => {
    const [selected, setSelected] = useState([]);
    const [lists, setLists] = useState([]);


    useEffect(() => fetch(process.env.PUBLIC_URL + '/data/' + type + '/versions.json')
        .then(response => response.json())
        .then(response => {
            setLists(response);
            console.log(lists);
            console.log("load complete")
            // eslint-disable-next-line
        }), [type]);

    const printChange = (e) => {
        if (e.target.checked)
            setSelected(selected.concat(e.target.value));
        else
            setSelected(selected.filter(version => version !== e.target.value));
    };
    useEffect(() => {
        onSubmit(selected)
        // eslint-disable-next-line
    }, [selected]);


        return (
            <div>
                <h3 id="instruction">choose your environment!</h3>
                <ol className="test">
                    {lists.map((content,index) =>

                        <Category content={content} index={index} printChange={printChange}/>

                    )}
                </ol>
            </div>

    )
};

export default Selector;