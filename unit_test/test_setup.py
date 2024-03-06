from rest_framework.test import APITestCase
from rest_framework import status
from faker import Faker


class TestSetUp(APITestCase):
    def setUp(self):
        from apps.user.models import User
        import pdb

        faker = Faker()

        self.login_url = '/auth/jwt/create/'
        self.user = User.objects.create_user(
            username='Developer',
            name='Developer',
            last_name=faker.name(),
            email=faker.email(),
            password='admin369'

        )
        print(self.login_url)

        response = self.client.post(# self.client permite generara un navegador tipo postman para realizar las peticiones
            self.login_url, {
                'email': self.user.username,
                'password': 'admin369'
            },
            format='json'
        )
        #pdb.set_trace()
        print(response)
        self.assertEquals(response.status_code, status.HTTP_200_OK)

        self.token = response.data['access']# obtengo el token de la respuesta
        self.client.credentials(HTTP_AUTHORITATION='JWT ' + self.token)# asigno el token al usuario
        return super().setUp()

    # def test_setup(self):#validar si el setup funciona
    #     print(self.token)
