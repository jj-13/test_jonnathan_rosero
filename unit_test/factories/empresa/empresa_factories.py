from faker import Faker
from apps.empresa.models import Empresa

faker = Faker()


class EmpresaFactory:

    def build_empresa_json(self):
        return {
            'nit': str(faker.random_number(digits=11)),
            'nombre': faker.company(),
            'direccion': faker.address(),
            'telefono': faker.phone_number()
            # 'email': faker.email()
        }

    def create_empresa(self):
        return Empresa.objects.create(**self.build_empresa_json())

