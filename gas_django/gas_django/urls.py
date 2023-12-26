from django.contrib import admin
from backend_api.views import register_user, login_user,BrandsView,CarsView,CustomersView,FuelTypesView,FuelColumnsView,FuelingView,ProductsView,StorePurchasesView,import_data,CarDetailView
from django.urls import path
from django.conf.urls.static import static
from gas_django import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', register_user, name='register_user'),
    path('api/login/', login_user, name='login_user'),
    path('api/cars/', CarsView.as_view(), name='car-list'),
    path('api/brands/', BrandsView.as_view(), name='brand-list'),
    path('api/customers/', CustomersView.as_view(), name='customers-list'),
    path('api/fueltype/', FuelTypesView.as_view(), name='fuel_type-list'),
    path('api/fuels/', FuelingView.as_view(), name='fueling-list'),
    path('api/products/', ProductsView.as_view(), name='product-list'),
    path('api/store/', StorePurchasesView.as_view(), name='store-list'),
    path("import-data/", import_data, name="import_data"),
    path('api/cars/<int:id>/', CarDetailView.as_view(), name='car-detail'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)