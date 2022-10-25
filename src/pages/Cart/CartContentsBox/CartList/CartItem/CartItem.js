import React, { useState, useRef } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import API from '../../../../../config';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import './CartItem.scss';

const CartItem = ({ list }) => {
  const [openModal, setOpenModal] = useState(false);
  const [quantity, setQuantity] = useState(list?.quantity);

  const timerRef = useRef(0);

  console.log(list);

  const token = localStorage.getItem('token');

  const increaseCount = () => {
    setQuantity(quantity => quantity + 1);
  };

  const decreaseCount = () => {
    setQuantity(quantity => quantity - 1);
  };

  const updateItem = quantity => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      fetch(`${API.updateCarts}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
        body: JSON.stringify({
          productId: list.id,
          quantity: quantity,
        }),
      }).catch(error => alert(error));
    }, 500);
  };

  return (
    <div className="cartItem">
      <img
        className="cartItemImg"
        src={list?.thumnail_image_url}
        alt="상품이미지"
      />
      <div className="cartItemName">{list?.name}</div>
      <div className="cartItemCountBox">
        <div className="cartItemCount">
          {list?.quantity <= 1 ? (
            <AiOutlineMinus style={{ color: 'lightGray' }} />
          ) : (
            <AiOutlineMinus
              className="cartCountIcon"
              onClick={() => {
                decreaseCount();
                updateItem(quantity);
              }}
            />
          )}
          <p className="cartCounts">{quantity}</p>
          <AiOutlinePlus
            className="cartCountIcon"
            onClick={() => {
              increaseCount();
              updateItem(quantity);
            }}
          />
        </div>
      </div>
      <div className="cartItemPrice">{list?.price * quantity + `원`}</div>
      <TiDeleteOutline
        className="deleteIcon"
        onClick={() => {
          setOpenModal(true);
        }}
      />
      {openModal && (
        <Modal
          type="default"
          contents={contents}
          data={list}
          close={() => {
            setOpenModal(false);
          }}
        />
      )}
    </div>
  );
};

const contents = {
  id: 0,
  title: '삭제하시겠습니까?',
  type: 'delete',
};

export default CartItem;
