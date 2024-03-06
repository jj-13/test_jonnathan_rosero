from rest_framework import status
from unit_test.test_setup import TestSetUp
from apps.empresa.models import Empresa
from unit_test.factories.empresa.empresa_factories import EmpresaFactory
import pdb


class ExpenseTestCase(TestSetUp):
    def test_search_supplier(self):
        supplier = EmpresaFactory().create_supplier()

        response = self.client.get(
            '/api/v1/empresas/',
            {
                'ruc_or_bussines_name': supplier.ruc
            },
            HTTP_AUTHORIZATION='JWT ' + self.access,
            format='json'
        )
        #pdb.set_trace()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['ruc'], supplier.ruc)

    # def test_search_supplier_error(self):
    #     supplier = SupplierFactory().create_supplier()
    #
    #     response = self.client.get(
    #         '/api/expense/search_supplier/',
    #         {
    #             'ruc_or_bussines_name': '123'
    #         },
    #         HTTP_AUTHORIZATION='Bearer ' + self.token,
    #         format='json'
    #     )
    #
    #     self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    #     self.assertNotEqual(supplier.ruc, '123')
    #     self.assertEqual(response.data['message'], 'No se encontro al proveedor')
    #
    # def test_new_supplier(self):
    #     supplier = SupplierFactory().build_supplier_json()
    #     response = self.client.post(
    #         '/api/expense/new_supplier/',
    #         supplier,
    #         HTTP_AUTHORIZATION='Bearer ' + self.token,
    #         format='json'
    #     )
    #     #pdb.set_trace()
    #     self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    #     self.assertEqual(Supplier.objects.all().count(), 1)
    #     self.assertEqual(response.data['supplier']['ruc'], supplier['ruc'])
    #
