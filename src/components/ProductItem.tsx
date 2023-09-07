import { Rating } from '@mui/material';
import EnergyLabel from './EnergyLabel/EnergyLabel';
import { Product } from '../product/product';

type Props = {
  product: Product;
};
export default function ProductItem({ product }: Props) {
  return (
    <div className='w-full border border-gray-400 rounded-xl p-4'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-left'>{product.name}</p>
          <EnergyLabel />
        </div>
        <div className='flex flex-col md:flex-row justify-start gap-4'>
          <div className='flex flex-col justify-between md:w-1/3 gap-2 p-4'>
            <div className='w-full flex justify-start sm:justify-center'>
              <img width='100%' src={product.imageUrl} />
            </div>
            <div className='flex items-center gap-2'>
              <Rating
                name='read-only'
                value={product.reviews.average}
                precision={0.25}
                readOnly
                color='primary'
              />
              <p>{product.reviews.count}</p>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row justify-between'>
            <div className='flex flex-col gap-2 items-start justify-start p-4'>
              {product.topFeatures.map((feature) => (
                <div className='text-start'>
                  <p className='text-sm'>{feature.name}</p>
                  <p className='font-bold'>{feature.value}</p>
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-4 items-start justify-start p-4'>
              <div className='text-start'>
                <p className='text-3xl font-bold'>
                  {product.price.value.toFixed(0)},-
                </p>
                <div className='text-xs text-start'>
                  <p>inkl. MwSt. versandkostenfrei</p>
                  <p>
                    Bezahle in 12 Raten à 26,30 € (eff. Zins. P.a. 9.9%)**
                  </p>{' '}
                  <p>Gesamtpreis 315.6 €</p>
                </div>
              </div>

              <div className='text-start'>
                <div className='flex items-center gap-2'>
                  <div className='bg-green-700 rounded-full w-2 h-2'></div>
                  <p className='text-green-700 text-xs font-bold'>
                    Online verfügbar
                  </p>
                </div>
                <p className='text-gray-600 text-xs pl-4'>
                  Lieferung 07.09.2023 - 08.09.2023
                </p>
              </div>
              <div className='text-start'>
                <div className='flex items-center gap-2'>
                  <div className='bg-green-700 rounded-full w-2 h-2'></div>
                  <p className='text-green-700 text-xs font-bold'>
                    Marktabholung ab 09.09.2023
                  </p>
                </div>
                <p className='text-gray-600 text-xs pl-4'>Ingolstadt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
