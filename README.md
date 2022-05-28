# Awesome Pay

> This is a virtual payment module made from react.

<br />

## 🌈 Install

```
npm install awesome-pay
```

<br />

## 🌈 Usage

### Setting

#### `public/index.html`

```html
<body>
  ...
  <div id="modal"></div>
  ...
</body>
```

### Use

```js
import { PayModal } from 'awesome-pay';

export default function Component({ totalPrice }) {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(prevState => !prevState);
  };

  const paymentFunc = () => {
    toggleShowModal();
    // Do Something What You Want
  };

  return (
    <div>
      ...
      <PayModal
        showModal={showModal}
        toggleShowModal={toggleShowModal}
        companyName={companyName}
        totalPrice={totalPrice}
        paymentFunc={paymentFunc}
      />
      ...
    </div>
  );
}
```

<br />

## 🌈 Author

| ![](https://github.com/LAH1203.png?size=100) |
| :------------------------------------------: |
|   [LeeAhHyun](https://github.com/LAH1203)    |
