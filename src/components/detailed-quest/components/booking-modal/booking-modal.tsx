import { FormEvent, useState } from 'react';
import axios from 'axios';
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';

import { Order } from '../../../../types/types';


type BookingPopup ={
  setIsBookingModalOpened: ((any:boolean)=> void);
}

function BookingModal({setIsBookingModalOpened} : BookingPopup) : JSX.Element { 
  const [checked, setChecked] = useState<boolean>(false);
  const [formState, setFormState] = useState<Order>(
    {
      name: '',
      peopleCount: '',
      phone: '',
      isLegal: false,
    }
  );
  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    const {name, value} = evt.target;
    setFormState({...formState, [name]: value});
  };

  const onSubmit = () => {
    axios.post<Order>('http://localhost:3001/orders/', {
      name: formState.name,
      peopleCount: Number(formState.peopleCount),
      phone: formState.phone,
      isLegal: formState.isLegal,
    })
    .then(function () {
      alert('Заявка отправлена');
      setIsBookingModalOpened(false);
    })
    .catch(function () {
      alert('Ошибка отправки');
    });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit();
  };

  function handleOnClickButton():void {
    setIsBookingModalOpened(false);
  }

return(
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn onClick={handleOnClickButton}>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        action="#"
        method="post"
        id="booking-form"
        onSubmit={handleFormSubmit}
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            value={formState.name}
            onChange={handleFieldChange}
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            type="tel"
            id="phone"
            name="phone"
            placeholder="Телефон"
            value={formState.phone}
            onChange={handleFieldChange}
            pattern="[0-9]{10}"
            title="Телефон должен состоять из 10 цифр"
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            type="text"
            id="peopleCount"
            name="peopleCount"
            placeholder="Количество участников"
            value={formState.peopleCount}
            onChange={handleFieldChange}
            pattern="[1-5]{0,1}"
            title="Укажите числом от 1 до 5"
            required
          />
        </S.BookingField>
        <S.BookingSubmit>Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
  );
}

export default BookingModal;
