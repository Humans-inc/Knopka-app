import './UserContent.scss';

import VideoList from '../VideoList/VideoList';

const UserContent = () => {
  const list = [
    {
      id: 'lVJbEYSA-MI',
      title: 'Алгоритмы ВБ',
      description: 'Урок 1',
    },
    {
      id: 'rSQlJ0vaNus',
      title: 'Самодиагностика карточки',
      description: 'Урок 2',
    },
    {
      id: 'WtQi1FWvl7k',
      title: 'Почему не работает твоя реклама',
      description: 'Урок 3',
    },
    {
      id: 'pwJ2L-qE_J8',
      title: 'Почему одного инструмента продвижения больше не достаточно?',
      description: 'Урок 4',
    },
    {
      id: 'GcjgrM0fyj4',
      title: 'Что может обнулить все твои усилия по продвижению товара на WB?',
      description: 'Урок 5',
    },
  ];
  return (
    <div className="user-content">
      <div className="user-content__header">
        <div className="user-content__logo">
          <img src="/assets/vector.svg" alt="" width="125" />
        </div>
        <div className="user-content__title">
          Продвижение карточки товара на&nbsp;Wildberries
        </div>
      </div>
      <VideoList list={list} />
    </div>
  );
};

export default UserContent;
