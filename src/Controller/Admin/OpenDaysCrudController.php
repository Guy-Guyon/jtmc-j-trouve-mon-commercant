<?php

namespace App\Controller\Admin;

use App\Entity\OpenDays;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class OpenDaysCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return OpenDays::class;
    }
}
