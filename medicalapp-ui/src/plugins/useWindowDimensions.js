// Импорт методов для работы с состоянием(useState) и для работы с данными до загрузки компонента(useEffect)
import { useState, useEffect } from 'react'

// Функция для получения ширины  и высоты страницы
function getWindowDimensions() {
    // Определяем переменные и переименовываем их
    const { innerWidth: width, innerHeight: height } = window
    // Возвращаем 2 переменные
    return {
        width,
        height
    }
}

// Экспортируем функцию
export default function useWindowDimensions() {
    // Хук
    // В состояние которого передается результат работы функции getWindowDimensions
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
    // Пишем метод, в котором будем изменять данные ширины и высоты, если они изменились
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        // В результате, удаляем обработчик события, который удалит выполнения функции
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    // Возвращаем результат выполнения функции
    return windowDimensions
}
