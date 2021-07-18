// import React from 'react';
import React, {PureComponent, memo} from 'react';

// class Try extends PureComponent {
    // state={
    //     result: this.props.result,
    //     try: this.props.try
    // }
//     render() {
//         const { tryInfo } = this.props;
//         return (
//             <li>
//                 <div>{Tryinfo.try}</div>
//                 <div>{Tryinfo.result}</div>
//             </li>
//         )
//     }
// }

const Try = memo(({ Tryinfo }) => {
    // const [result, setReult] = useState(tryinfo.result);
    // const onClick = () => {setResult('1')};
    return (
        <li>
            <div>{Tryinfo.try}</div>
            <div>{Tryinfo.result}</div>
        </li>
    )
});

export default Try;