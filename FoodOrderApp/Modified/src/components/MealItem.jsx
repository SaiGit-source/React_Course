import { currencyFormatter } from '../util/formatting'
import Button from './UI/Button'

export default function MealItem({meal}) {
    return <li className="meal-item">
        <article>
            {/* we use meal.image, which is a relative path from backend
            so we prepend http://localhost:3000/ */}
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button>Add to Cart</Button>
            </p>
        </article>
    </li>
}