import { useState } from 'react';

/**
 * Компонент для скрытия/отображения вложенного содержимого
 * 
 * @param {Object} props - Пропсы компонента
 * @param {React.ReactNode} props.children - Вложенное содержимое
 * @param {boolean} [props.initialVisible=true] - Начальное состояние видимости
 * @param {string} [props.hideText='Скрыть'] - Текст кнопки скрытия
 * @param {string} [props.showText='Показать'] - Текст кнопки показа
 * @param {React.ComponentType} [props.buttonComponent] - Кастомный компонент кнопки
 * @param {'top'|'bottom'|'left'|'right'} [props.buttonPosition='bottom'] - Позиция кнопки
 * @returns {JSX.Element} Компонент с возможностью скрытия содержимого
 */
export default function Hideable({
  children,
  initialVisible = true,
  hideText = 'Скрыть',
  showText = 'Показать',
  buttonComponent: ButtonComponent,
  buttonPosition = 'bottom'
}) {
  const [isVisible, setIsVisible] = useState(initialVisible);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const positions = {
    top: 'flex-col',
    bottom: 'flex-col-reverse',
    left: 'flex-row',
    right: 'flex-row-reverse'
  };

  const containerClass = `flex gap-2 ${positions[buttonPosition]}`;

  const DefaultButton = () => (
    <button 
      onClick={toggleVisibility}
      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
    >
      {isVisible ? hideText : showText}
    </button>
  );

  const Button = ButtonComponent 
    ? () => <ButtonComponent isVisible={isVisible} toggle={toggleVisibility} /> 
    : DefaultButton;

  return (
    <div className={containerClass}>
      {isVisible && children}
      <Button />
    </div>
  );
}