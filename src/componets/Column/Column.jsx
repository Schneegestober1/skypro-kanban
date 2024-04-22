import { Card } from "../Card/Card"

export const Column = ({title}) => {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                <Card name={'Web Design'} color={'_orange'}/>
                <Card name={'Research'} color={'_green'}/>
                <Card name={'Copywriting'} color={'_purple'}/>
            </div>
        </div>	
    )
}