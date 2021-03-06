<?php

namespace App\Repository;

use App\Entity\Store;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Store|null find($id, $lockMode = null, $lockVersion = null)
 * @method Store|null findOneBy(array $criteria, array $orderBy = null)
 * @method Store[]    findAll()
 * @method Store[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StoreRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Store::class);
    }

   // create a custom function for active activity filters
    public function findByActivity($session)
    {
        $citySearch = $session->get('search-city');
        $activity = $session->get('activity');
        $qb = $this->createQueryBuilder('s');

        if($activity !== null)
        {
            $qb->andWhere("s.storeActivity = :activity")
            ->setParameter('activity', $activity);
        }

        if($citySearch !== null)
        {
            $qb->andWhere("s.city = :citySearch")
            ->orWhere("s.postalCode = :citySearch ")
            ->setParameter('citySearch', $citySearch);
        }

          return  $qb->getQuery()->getResult();
    }

}
