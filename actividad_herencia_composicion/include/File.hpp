#ifndef File_HPP
#define File_HPP
#include <iostream>
#include <IListable.hpp>
class File : public IListable
{
    private:
        std::string m_nodeName;


    public:
        
        
        File(std::string nodeName);
        
        void list(int depth);//operation
        virtual ~File(){};

     
};
#endif