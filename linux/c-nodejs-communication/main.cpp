#include<iostream>
#include<fstream>
#include "json.hpp"

using json = nlohmann::json;
using namespace std;

int main(){
    json obj;
    obj["name"] = "sinawic";
    obj["age"] = "24";
    obj["role"] = "DevOps engineer";

    ofstream file("output.json");
    file<<setw(4)<<obj<<endl;
    file.close();
    cout<<"file created";

    return 0;
}