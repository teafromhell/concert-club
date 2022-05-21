import './ConcertInfo.scss'
import number from '../../assets/1000.png';
import line from '../../assets/Line 11.png'
import Cards from '../Cards/Cards';

const ConcertInfo = (): JSX.Element => {


    return (
        <div className='main'>
            <div className='main__header'>
                <h3>Купили билеты</h3>
                <div><img src={number} alt="number" /></div>
            </div>


            <div className='main__cards'>
                <Cards />

            </div>



            <div className='main__about-stage'>
                <div className='main__about-stage-left'>

                    <h3>О площадке</h3>
                    <div className='main__about-stage-text'>
                        <img className='main__blue-line' src={line} alt="line" />
                        <h5>Современная площадка
                            для проведения концертов и других
                            мероприятий любой сложности.
                        </h5>
                        <p>Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам. </p>
                    </div>
                </div>
                <div className='main__send-request'>
                    <form action="">
                        <label htmlFor="">Оставить заявку на проведение концерта</label>
                        <textarea name="" id="" cols={30} rows={10} placeholder='Расскажите о вашем предложении '></textarea>
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
            <div className='main__aboutband'>
                <h3>О группе</h3>
                <p>Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</p>
            </div>
        </div>
    )
}

export default ConcertInfo