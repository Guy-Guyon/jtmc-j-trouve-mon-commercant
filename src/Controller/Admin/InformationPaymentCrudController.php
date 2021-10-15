<?php

namespace App\Controller\Admin;

use App\Entity\InformationPayment;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class InformationPaymentCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return InformationPayment::class;
    }
}
