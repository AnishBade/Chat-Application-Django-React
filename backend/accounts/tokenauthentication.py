import jwt
from jwt.exceptions import InvalidTokenError, ExpiredSignatureError
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings
from django.contrib.auth import get_user_model
from datetime import datetime, timedelta


class JWTAuthentication(BaseAuthentication):

    def extract_token(self, request):
        auth_header =  request.headers.get('Authorization')
        if auth_header and auth_header.startswith("Bearer "):
            return auth_header.split('')[1]
        return None

    @staticmethod
    def generate_token(payload):
        expiration = datetime.utcnow() + timedelta(hours=24)
        payload['exp'] = expiration
        token = jwt.encode(payload=payload, key=settings.SECRET_KEY, algorithm='HS256')
        return token
