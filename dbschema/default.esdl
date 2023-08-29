module default {
    type User {
        required name: str;
        password: str;
        email: str;
        emailVerifiedAt: datetime;
        role: str;
        userGroup: UserGroup;
    }

    type UserGroup {
        required name: str;
        link users:= .<userGroup[is User];
    }

    type Article {
        required title: str;
        required slug: str {constraint exclusive};
        author: User;
        editor: User;
        medias: array<str>;


    }

    


}
