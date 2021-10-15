<?php

namespace App\Controller\Admin;

use App\Entity\CommercialService;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class CommercialServiceCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return CommercialService::class;
    }
}
